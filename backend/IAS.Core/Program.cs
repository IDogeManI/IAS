using IAS.Core.Hubs;
var builder = WebApplication.CreateBuilder(args);
builder.Services.AddSignalR();
var app = builder.Build();
app.UseDeveloperExceptionPage();
app.UseRouting();
app.MapHub<TapiHub>("/tapi");
app.Run();