using MusicalOnlineService.Services.Interfaces;
using MusicalOnlineService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace MusicalOnlineService.Controllers
{
    [ApiController]
    public class AlbumController : ControllerBase
    {
        private readonly IAlbumService _service;

        public AlbumController(IAlbumService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("[controller]/get-all")]
        [ProducesResponseType(typeof(Album), StatusCodes.Status200OK)]
        public IActionResult GetAll()
        {
            try
            {
                var entities = _service.GetAll();

                return Ok(entities);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpGet]
        [Route("[controller]/get")]
        [ProducesResponseType(typeof(Album), StatusCodes.Status200OK)]
        public IActionResult Get(string id)
        {
            try
            {
                var entity = _service.Get(id);

                return Ok(entity);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpGet]
        [Route("[controller]/get-albums-by-genres")]
        [ProducesResponseType(typeof(Album), StatusCodes.Status200OK)]
        public IActionResult GetAlbumsByGenres(string genres)
        {
            try
            {
                var entities = _service.GetAlbumsByGenres(genres);

                if (entities is null)
                {
                    return NotFound();
                }

                return Ok(entities);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpGet]
        [Route("[controller]/get-albums-by-release-date")]
        [ProducesResponseType(typeof(Album), StatusCodes.Status200OK)]
        public IActionResult GetAlbumsByReleaseDate(DateTime releaseDate)
        {
            try
            {
                var entities = _service.GetAlbumsByReleaseDate(releaseDate);

                if (entities is null)
                {
                    return NotFound();
                }

                return Ok(entities);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpGet]
        [Route("[controller]/get-albums-by-plays-number")]
        [ProducesResponseType(typeof(Album), StatusCodes.Status200OK)]
        public IActionResult GetAlbumsByPlaysNumber(int playsNumber)
        {
            try
            {
                var entities = _service.GetAlbumsByPlaysNumber(playsNumber);

                if (entities is null)
                {
                    return NotFound();
                }

                return Ok(entities);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpGet]
        [Route("[controller]/get-album-by-title")]
        [ProducesResponseType(typeof(Album), StatusCodes.Status200OK)]
        public IActionResult GetAlbumByTitle(string title)
        {
            try
            {
                var entity = _service.GetAlbumByTitle(title);

                if (entity is null)
                {
                    return NotFound();
                }

                return Ok(entity);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpGet]
        [Route("[controller]/get-album-by-track-id")]
        [ProducesResponseType(typeof(Album), StatusCodes.Status200OK)]
        public IActionResult GetAlbumByTrackID(string id)
        {
            try
            {
                var entities = _service.GetAlbumByTrackID(id);

                if (entities is null)
                {
                    return NotFound();
                }

                return Ok(entities);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpGet]
        [Route("[controller]/get-albums-by-performer-id")]
        [ProducesResponseType(typeof(Album), StatusCodes.Status200OK)]
        public IActionResult GetAlbumsByPerformerID(string id)
        {
            try
            {
                var entities = _service.GetAlbumsByPerformerID(id);

                if (entities is null)
                {
                    return NotFound();
                }

                return Ok(entities);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpPost]
        [Route("[controller]/create")]
        [ProducesResponseType(typeof(Album), StatusCodes.Status200OK)]
        public IActionResult Create([FromBody] Album entity)
        {
            try
            {
                if (entity is null || !ModelState.IsValid)
                {
                    return BadRequest("Модель не подходит");
                }

                var result = _service.Create(entity);

                return Ok(entity);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpPut]
        [Route("[controller]/update")]
        [ProducesResponseType(typeof(Album), StatusCodes.Status200OK)]
        public IActionResult Update([FromBody] Album entity)
        {
            try
            {
                if (entity is null || !ModelState.IsValid)
                {
                    return BadRequest("Модель не подходит");
                }

                var result = _service.Update(entity);

                return Ok(result);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpDelete]
        [Route("[controller]/delete")]
        [ProducesResponseType(typeof(Album), StatusCodes.Status200OK)]
        public IActionResult Delete([FromBody] Album entity)
        {
            try
            {
                if (entity is null || !ModelState.IsValid)
                {
                    return BadRequest("Модель не подходит");
                }

                var result = _service.Remove(entity);

                return Ok(result);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }
    }
}
