using Microsoft.EntityFrameworkCore;
using System.Diagnostics.Tracing;
using webapi.event_.senai.Contexts;
using webapi.event_.senai.Domains;
using webapi.event_.senai.Interfaces;

namespace webapi.event_.senai.Repositories
{
    public class ComentariosEventoRepository : IComentariosEventoRepository
    {
        private readonly EventContext _comentarioEventoContext;

        public ComentariosEventoRepository()
        {
            _comentarioEventoContext = new EventContext();
        }


        public void Cadastrar(ComentariosEvento comentariosEvento)
        {
            _comentarioEventoContext.ComentariosEvento.Add(comentariosEvento);

            _comentarioEventoContext.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            ComentariosEvento eventoComentarioBuscado = GetById(id);

            if (eventoComentarioBuscado != null)
            {
                _comentarioEventoContext.ComentariosEvento.Remove(eventoComentarioBuscado);
                _comentarioEventoContext.SaveChanges();
            }
        }

        public ComentariosEvento GetById(Guid id)
        {
            return _comentarioEventoContext.ComentariosEvento.FirstOrDefault(e => e.IdComentario == id)!;
        }

        public List<ComentariosEvento> Listar()
        {
            return _comentarioEventoContext.ComentariosEvento.ToList();
        }
    }
}
