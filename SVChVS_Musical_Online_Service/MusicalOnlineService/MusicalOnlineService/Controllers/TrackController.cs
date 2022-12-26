using MusicalOnlineService.Services.Interfaces;
using MusicalOnlineService.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;

namespace MusicalOnlineService.Controllers
{
    [ApiController]
    public class TrackController : ControllerBase
    {
        private readonly ITrackService _service;

        public TrackController(ITrackService service)
        {
            _service = service;
        }

        [HttpGet]
        [Route("[controller]/get-tracks-range")]
        [ProducesResponseType(typeof(Track), StatusCodes.Status200OK)]
        public IActionResult GetTracksRange(int range)
        {
            try
            {
                var entities = _service.GetTracksRange(range);

                return Ok(entities);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpGet]
        [Route("[controller]/get-all")]
        [ProducesResponseType(typeof(Track), StatusCodes.Status200OK)]
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
        [ProducesResponseType(typeof(Track), StatusCodes.Status200OK)]
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
        [Route("[controller]/get-tracks-by-genres")]
        [ProducesResponseType(typeof(Track), StatusCodes.Status200OK)]
        public IActionResult GetTracksByGenres(string genres)
        {
            try
            {
                var entities = _service.GetTracksByGenres(genres);

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
        [Route("[controller]/get-track-by-title")]
        [ProducesResponseType(typeof(Track), StatusCodes.Status200OK)]
        public IActionResult GetTrackByTitle(string title)
        {
            try
            {
                var entity = _service.GetTrackByTitle(title);

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
        [Route("[controller]/get-tracks-by-album-id")]
        [ProducesResponseType(typeof(Track), StatusCodes.Status200OK)]
        public IActionResult GetTrackByAlbumID(string id)
        {
            try
            {
                var entities = _service.GetTracksByAlbumID(id);

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
        [Route("[controller]/get-tracks-by-performer-id")]
        [ProducesResponseType(typeof(Track), StatusCodes.Status200OK)]
        public IActionResult GetTrackByPerformerID(string id)
        {
            try
            {
                var entities = _service.GetTracksByPerformerID(id);

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
        [ProducesResponseType(typeof(Track), StatusCodes.Status200OK)]
        public IActionResult Create([FromBody] Track entity)
        {
            try
            {
                if (entity is null || !ModelState.IsValid)
                {
                    return BadRequest("Модель не подходит");
                }

                var result = _service.Create(entity);

                return Ok(result);
            }
            catch (Exception e)
            {
                return StatusCode(500, $"{e.Message}");
            }
        }

        [HttpPut]
        [Route("[controller]/update")]
        [ProducesResponseType(typeof(Track), StatusCodes.Status200OK)]
        public IActionResult Update([FromBody] Track entity)
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
        [ProducesResponseType(typeof(Track), StatusCodes.Status200OK)]
        public IActionResult Delete([FromBody] Track entity)
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
