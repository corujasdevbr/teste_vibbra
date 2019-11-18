using System;
using System.Threading.Tasks;
using CorujasDev.Vibbra.Coworking.Application.Interfaces;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.Place;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace CorujasDev.Vibbra.Coworking.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    public class PlacesController : ControllerBase
    {
        private readonly IPlaceService _placeService;
        public PlacesController(IPlaceService placeService)
        {
            _placeService = placeService;
        }

        [HttpGet]
        [Authorize(Roles = "Administrator,Professional")]
        public IActionResult GetAll()
        {
            return Ok(_placeService.GetAll());
        }

        [HttpGet("{id}")]
        [Authorize(Roles = "Administrator,Professional")]
        public IActionResult GetById(Guid id)
        {
            return Ok(_placeService.GetById(id));
        }

        [HttpPost]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Create(CreatePlaceViewModel place)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(place);


                _placeService.Add(place);

                return CreatedAtAction(nameof(GetById), new { id = place.Id }, place);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Update(Guid id, UpdatePlaceViewModel place)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(place);

                _placeService.Update(place);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpDelete("{id}")]
        [Authorize(Roles = "Administrator")]
        public async Task<IActionResult> Delete(Guid id)
        {
            try
            {
                _placeService.Delete(id);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}