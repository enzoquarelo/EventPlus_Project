using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.event_.senai.Domains
{
    [Table(nameof(Evento))]

    public class Evento
    {
        [Key]
        public Guid IdEvento { get; set; } = Guid.NewGuid();

        [Column(TypeName = "DATE")]
        [Required(ErrorMessage = "Data obrigatoria")]
        public DateTime DataEvento { get; set; }

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Nome do evento obrigatorio")]
        public string? NomeEvento { get; set; }


        [Column(TypeName = "TEXT")]
        [Required(ErrorMessage = "Descricao do evento obrigatorio")]
        public string? Descricao { get; set; }

        [Required(ErrorMessage = "Tipo de evento obrigatorio")]
        public Guid IdTipoEvento { get; set; }

        [ForeignKey(nameof(IdTipoEvento))]
        public TiposEvento? TiposEvento { get; set; }

        [Required(ErrorMessage = "Tipo de evento obrigatorio")]
        public Guid IdInstituicao { get; set; }

        [ForeignKey(nameof(IdInstituicao))]
        public Instituicao? Instituicao { get; set; }


    }
}
