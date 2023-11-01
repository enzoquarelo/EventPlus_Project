using System.Diagnostics.Tracing;
using webapi.event_.senai.Domains;

namespace webapi.event_.senai.Interfaces
{
    public interface IComentariosEventoRepository
    {
        void Cadastrar(ComentariosEvento comentariosEvento);

        void Deletar(Guid id);

        List<ComentariosEvento> Listar();

        ComentariosEvento GetById(Guid id);

    }
}
