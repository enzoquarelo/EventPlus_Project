using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using webapi.event_.senai.Domains;
using webapi.event_.senai.Interfaces;
using webapi.event_.senai.Repositories;

namespace webapi.event_.senai.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Produces("application/json")]
    [Authorize(Roles = "Administrador")]
    public class UsuarioController : ControllerBase
    {
        private IUsuarioRepository _UsuarioRepository;

        public UsuarioController()
        {
            _UsuarioRepository = new UsuarioRepository();
        }

        [HttpPost]
        public IActionResult Post(Usuario usuario)
        {
            try
            {
                _UsuarioRepository.Cadastrar(usuario);

                return StatusCode(201);
            }
            catch (Exception erro)
            {

                return BadRequest(erro.Message);
            }
        }

        [HttpGet("{id}")]
        public IActionResult GetById(Guid id)
        {
            try
            {
                Usuario usuario = _UsuarioRepository.BuscarPorId(id);

                if (usuario == null)
                {
                    return NotFound("User not found");
                }

                return Ok(usuario);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }

        [HttpPut("Login")]
        public IActionResult FoundEmailAndPassword(string email, string senha)
        {
            try
            {
                Usuario usuario = _UsuarioRepository.BuscarPorEmailESenha(email, senha);

                if (usuario == null)
                {
                    return NotFound("Email ou senha inválidos");
                }

                return Ok(usuario);
            }
            catch (Exception e)
            {
                return BadRequest(e.Message);
            }
        }
    }
}
