using Microsoft.EntityFrameworkCore;
using webapi.event_.senai.Domains;

namespace webapi.event_.senai.Contexts
{
    public class EventContext : DbContext
    {
        public DbSet<TiposUsuario> TiposUsuario { get; set; }

        public DbSet<Usuario> Usuario { get; set; }

        public DbSet<TiposEvento> TiposEvento { get; set; }

        public DbSet<Evento> Evento { get; set; }

        public DbSet<ComentariosEvento> ComentariosEvento { get; set; }

        public DbSet<Instituicao> Instituicao { get; set; }

        public DbSet<PresencasEvento> PresencasEvento { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=DESKTOP-2KJISQH\\SENAI; Database= webapi.event+.manha; User Id= sa; Pwd= Senai@134; TrustServerCertificate= True;");

            base.OnConfiguring(optionsBuilder);
        }
    }
}
