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
    public class PhotoController : ControllerBase
    {
        private readonly IPhotoService _service;

        public PhotoController(IPhotoService service)
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
                var photoFile = new PhotoFile();
                photoFile.AlbumTitle = Request.Form["albumTitle"];
                photoFile.PerformerName = Request.Form["performerName"];
                photoFile.File = Request.Form.Files[0].OpenReadStream();
                _service.Create(photoFile);
                return Ok();
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }
    }
}
