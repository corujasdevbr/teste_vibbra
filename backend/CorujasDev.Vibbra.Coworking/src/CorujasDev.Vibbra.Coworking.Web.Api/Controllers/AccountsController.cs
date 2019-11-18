using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using CorujasDev.Vibbra.Coworking.Application.Interfaces;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.Account;
using CorujasDev.Vibbra.Coworking.Application.ViewModel.User;
using CorujasDev.Vibbra.Coworking.Core.Enum;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;

namespace CorujasDev.Vibbra.Coworking.Web.Api.Controllers
{
    [Route("api/[controller]")]
    [Produces("application/json")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private readonly  IAccountService _accountService;
        public AccountsController(IAccountService accountService)
        {
            _accountService = accountService;
        }

        [HttpPost("login")]
        public IActionResult Login(LoginViewModel login)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(login);

                UserViewModel user = _accountService.Login(login);

                if (user == null)
                    return NotFound("Email ou senha inválidos");

                var claims = new[]
                {
                    new Claim(JwtRegisteredClaimNames.Email, user.Email),
                    new Claim(JwtRegisteredClaimNames.Jti, user.Id.ToString()),
                    new Claim("TypeUser", Enum.GetName(typeof(EnTypeUser), user.TypeUser)),
                    new Claim(ClaimTypes.Role, Enum.GetName(typeof(EnTypeUser), user.TypeUser)),
                };

                var key = new SymmetricSecurityKey(System.Text.Encoding.UTF8.GetBytes("vibbra-coworking-key-auth"));

                var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

                var token = new JwtSecurityToken(
                    issuer: "CorujasDev.Vibbra.Coworking",
                    audience: "Coworking",
                    claims: claims,
                    expires: DateTime.Now.AddDays(30),
                    signingCredentials: creds);

                return Ok(new
                {
                    token = new JwtSecurityTokenHandler().WriteToken(token)
                });

            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
        
        [HttpPost("create/admin")]
        [Authorize(Roles = "Administrator")]
        public IActionResult CreateAdmin(CreateUserViewModel user)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(user);

                _accountService.Add(user);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("create/rh")]
        public IActionResult CreateRh(CreateUserViewModel user)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(user);

                _accountService.Add(user);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPost("create/professional")]
        public IActionResult CreateProfessional(CreateProfessionalViewModel user)
        {
            try
            {
                if (!ModelState.IsValid)
                    return BadRequest(user);

                _accountService.Add(user);
                return Ok();
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}