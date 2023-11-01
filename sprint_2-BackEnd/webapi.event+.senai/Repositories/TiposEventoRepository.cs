using webapi.event_.senai.Contexts;
using webapi.event_.senai.Domains;
using webapi.event_.senai.Interfaces;
using webapi.event_.senai.Utils;

namespace webapi.event_.senai.Repositories
{
    public class TiposEventoRepository : ITiposEventoRepository
    {
        private readonly EventContext _eventContext;

        public TiposEventoRepository()
        {
            _eventContext = new EventContext();
        }


        public void Atualizar(Guid id, TiposEvento tiposEvento)
        {
            TiposEvento eventoBuscado = _eventContext.TiposEvento.Find(id)!;

            if (eventoBuscado != null)
            {
                eventoBuscado.Titulo = tiposEvento.Titulo;
            }

            _eventContext.TiposEvento.Update(eventoBuscado!);

            _eventContext.SaveChanges();
        }

        public void Cadastrar(TiposEvento tiposEvento)
        {
            _eventContext.TiposEvento.Add(tiposEvento);

            _eventContext.SaveChanges();
        }

        public void Deletar(Guid id)
        {
            TiposEvento eventoBuscado = _eventContext.TiposEvento.Find(id)!;

            _eventContext.TiposEvento.Remove(eventoBuscado);

            _eventContext.SaveChanges();
        }

        public List<TiposEvento> Listar()
        {
            return _eventContext.TiposEvento.ToList();
        }
    }
}
