using MusicalOnlineService.Services.Interfaces;
using MusicalOnlineService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;
using System.Collections.Generic;
using System.Linq;
using System.IO;

namespace MusicalOnlineService.Controllers
{
    [ApiController]
    public class AudioController : ControllerBase
    {
        private readonly IAudioService _service;

        public AudioController(IAudioService service)
        {
            _service = service;
        }

        [HttpPost]
        [Route("[controller]/create")]
        [ProducesResponseType(StatusCodes.Status200OK)]
        public IActionResult Create()
        {
            try
            {
                var audioFile = new AudioFile();
                audioFile.TrackTitle = Request.Form["trackTitle"];
                audioFile.AlbumTitle = Request.Form["albumTitle"];
                audioFile.PerformerName = Request.Form["performerName"];
                audioFile.File = Request.Form.Files[0].OpenReadStream();
                _service.Create(audioFile);
                return Ok();
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }
    }
}
