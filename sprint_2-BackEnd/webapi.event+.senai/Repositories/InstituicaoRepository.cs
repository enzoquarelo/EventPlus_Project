using webapi.event_.senai.Contexts;
using webapi.event_.senai.Domains;
using webapi.event_.senai.Interfaces;

namespace webapi.event_.senai.Repositories
{
    public class InstituicaoRepository : IInstituiçãoRepository
    {
        private readonly EventContext _context;

        public InstituicaoRepository()
        {
            _context = new EventContext();
        }

        public void Cadastrar(Instituicao instituicao)
        {
            _context.Add(instituicao);

            _context.SaveChanges();
        }
    }
}
