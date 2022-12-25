using MusicalOnlineService.Services.Interfaces;
using MusicalOnlineService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Threading.Tasks;

namespace MusicalOnlineService.Controllers
{
    [ApiController]
    public class PerformerController : ControllerBase
    {
        private readonly IPerformerService _service;

        public PerformerController(IPerformerService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("[controller]/get-all")]
        [ProducesResponseType(typeof(Performer), StatusCodes.Status200OK)]
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
        [ProducesResponseType(typeof(Performer), StatusCodes.Status200OK)]
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
        [Route("[controller]/get-performers-by-genres")]
        [ProducesResponseType(typeof(Performer), StatusCodes.Status200OK)]
        public IActionResult GetPerformersByGenres(string genres)
        {
            try
            {
                var entities = _service.GetPerformersByGenres(genres);

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
        [Route("[controller]/get-performer-by-name")]
        [ProducesResponseType(typeof(Performer), StatusCodes.Status200OK)]
        public IActionResult GetPerformerByName(string name)
        {
            try
            {
                var entity = _service.GetPerformerByName(name);

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
        [Route("[controller]/get-performer-by-album-id")]
        [ProducesResponseType(typeof(Performer), StatusCodes.Status200OK)]
        public IActionResult GetPerformerByAlbumID(string id)
        {
            try
            {
                var entities = _service.GetPerformerByAlbumID(id);

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
        [Route("[controller]/get-performer-by-track-id")]
        [ProducesResponseType(typeof(Performer), StatusCodes.Status200OK)]
        public IActionResult GetPerformerByTrackID(string id)
        {
            try
            {
                var entities = _service.GetPerformerByTrackID(id);

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
        [ProducesResponseType(typeof(Performer), StatusCodes.Status200OK)]
        public IActionResult Create([FromBody] Performer entity)
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
        [ProducesResponseType(typeof(Performer), StatusCodes.Status200OK)]
        public IActionResult Update([FromBody] Performer entity)
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
        [ProducesResponseType(typeof(Performer), StatusCodes.Status200OK)]
        public IActionResult Delete([FromBody] Performer entity)
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
