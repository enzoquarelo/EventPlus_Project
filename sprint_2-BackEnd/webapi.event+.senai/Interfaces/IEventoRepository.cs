using webapi.event_.senai.Domains;

namespace webapi.event_.senai.Interfaces
{
    public interface IEventoRepository
    {
        void Cadastrar(Evento evento);

        void Deletar(Guid id);

        List<Evento> Listar();

        void Atualizar(Guid id, Evento evento);
    }
}
