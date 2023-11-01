using webapi.event_.senai.Domains;

namespace webapi.event_.senai.Interfaces
{
    public interface ITiposEventoRepository
    {
        void Cadastrar(TiposEvento tiposEvento);

        void Deletar(Guid id);

        List<TiposEvento> Listar();

        void Atualizar(Guid id, TiposEvento tiposEvento);
    }
}
