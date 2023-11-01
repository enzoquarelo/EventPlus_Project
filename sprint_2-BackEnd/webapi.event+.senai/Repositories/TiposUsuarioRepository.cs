using webapi.event_.senai.Contexts;
using webapi.event_.senai.Domains;
using webapi.event_.senai.Interfaces;

namespace webapi.event_.senai.Repositories
{
    public class TiposUsuarioRepository : ITiposUsuarioRepository
    {
        private readonly EventContext _eventContext;

        public TiposUsuarioRepository()
        {
            _eventContext = new EventContext();
        }

        public void Atualizar(Guid id, TiposUsuario tipoUsuario)
        {
            TiposUsuario usuarioBuscado = _eventContext.TiposUsuario.Find(id)!;

            if (usuarioBuscado != null)
            {
                usuarioBuscado.Titulo = tipoUsuario.Titulo;
            }

            _eventContext.TiposUsuario.Update(usuarioBuscado!);

            _eventContext.SaveChanges();
        }

        public TiposUsuario BuscarPorId(Guid id)
        {
            return _eventContext.TiposUsuario.FirstOrDefault(u => u.IdTiposUsuario == id)!;
        }

        public void Cadastrar(TiposUsuario tipoUsuario)
        {
            _eventContext.TiposUsuario.Add(tipoUsuario);

            _eventContext.SaveChanges();

        }

        public void Deletar(Guid id)
        {
            TiposUsuario usuarioBuscado = _eventContext.TiposUsuario.Find(id)!;

            _eventContext.TiposUsuario.Remove(usuarioBuscado);

            _eventContext.SaveChanges();
        }

        public List<TiposUsuario> Listar()
        {
            return _eventContext.TiposUsuario.ToList();
        }
    }
}
