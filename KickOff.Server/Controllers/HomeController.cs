using Microsoft.AspNetCore.Mvc;

namespace KickOff.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HomeController : ControllerBase
    {
        [HttpGet(Name = "GetHome")]
        public JsonResult Get()
        {
            string message = "Nigg3r";
            return new JsonResult(new { message });
        }
    }
}