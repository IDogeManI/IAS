using Microsoft.AspNetCore.SignalR;
namespace IAS.Core.Hubs
{
    public class TestClass
    {
        public string A { get; set; }
        public string B { get; set; }
        public string C { get; set; }
    }
    public class TapiHub : Hub
    {
        public override Task OnConnectedAsync()
        {
            return Task.CompletedTask;
        }
        public async Task SendMessage(Object o)
        {
            Console.WriteLine(o);
            await Clients.All.SendAsync("ReceiveMessage", new TestClass(){A = "1", B = "2", C = "3"});
        }
    }
}