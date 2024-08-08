using Yarp.ReverseProxy.Configuration;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddReverseProxy()
    .LoadFromMemory(new[]
        {
            new RouteConfig
            {
                RouteId = "tapi",
                ClusterId = "tapiCluster",
                Match = new RouteMatch
                {
                    Path = "/tapi/{**catch-all}"
                }
            }
        },
        new[]
        {
            new ClusterConfig
            {
                ClusterId = "tapiCluster",
                Destinations = new Dictionary<string, DestinationConfig>
                {
                    {
                        "tapiService", new DestinationConfig
                        {
                            Address = "http://localhost:5001"
                        }
                    }
                }
            }
        });
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(b =>
    {
        b.WithOrigins("http://localhost:4200","http://localhost:5001") // Укажите конкретные источники
            .AllowAnyHeader()
            .AllowAnyMethod()
            .AllowCredentials();
    });
});
var app = builder.Build();
app.UseRouting();
app.UseCors();
app.MapReverseProxy();
app.Run();