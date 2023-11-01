using Microsoft.EntityFrameworkCore;
using webapi.event_.senai.Contexts;
using webapi.event_.senai.Domains;
using webapi.event_.senai.Interfaces;
using webapi.event_.senai.Utils;

namespace webapi.event_.senai.Repositories
{
    public class UsuarioRepository : IUsuarioRepository
    {
        private readonly EventContext _eventContext;

        public UsuarioRepository()
        {
            _eventContext = new EventContext();
        }

        public Usuario BuscarPorEmailESenha(string email, string senha)
        {
            try
            {
                Usuario usuario = _eventContext.Usuario.Select(u => new Usuario
                {
                    IdUsuario = u.IdUsuario,
                    Nome = u.Nome,
                    Email = u.Email,
                    Senha = u.Senha,

                    TipoDeUsuario = new TiposUsuario
                    {
                        IdTiposUsuario = u.IdTiposUsuario,
                        Titulo = u.TipoDeUsuario!.Titulo
                    }
                }).FirstOrDefault(u => u.Email == email)!;

                if (usuario != null)
                {
                    bool confere = Criptografia.CompararHash(senha, usuario.Senha!);

                    if (confere)
                    {
                        return usuario;
                    }
                }
                return null!;
            }
            catch (Exception ex)
            {
                throw new Exception($"Erro ao buscar usuário por email e senha: {ex.Message}");
            }
        }

        public Usuario BuscarPorId(Guid id)
        {
            try
            {

                Usuario usuario = _eventContext.Usuario.Select(u => new Usuario
                {
                    IdUsuario = u.IdUsuario,
                    Nome = u.Nome,
                    Email = u.Email,
                    Senha = u.Senha,

                    TipoDeUsuario = new TiposUsuario
                    {
                        Titulo = u.TipoDeUsuario!.Titulo
                    }
                }).FirstOrDefault(u => u.IdUsuario == id)!;

                if (usuario != null)
                {
                    return usuario;
                }
                return null!;
            }
            catch (Exception)
            {

                throw;
            }
        }

        public void Cadastrar(Usuario usuario)
        {
            usuario.Senha = Criptografia.GerarHash(usuario.Senha!);

            _eventContext.Usuario.Add(usuario);

            _eventContext.SaveChanges();
        }
    }
}
