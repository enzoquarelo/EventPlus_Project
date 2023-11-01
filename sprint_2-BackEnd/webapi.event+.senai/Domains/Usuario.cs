    using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace webapi.event_.senai.Domains
{
    [Table(nameof(Usuario))]
    [Index(nameof(Email), IsUnique = true)]
    public class Usuario
    {

        [Key]
        public Guid IdUsuario { get; set; } = Guid.NewGuid();

        [Column(TypeName = "VARCHAR(100)")]
        [Required(ErrorMessage = "Nome do usuário é obrigatório!")]
        public string? Nome { get; set; }

        [Column(TypeName = "VARCHAR(256)")]
        [Required(ErrorMessage = "O campo e-mail é obrigatório!")]
        public string? Email { get; set; }

        [Column(TypeName = "CHAR(60)")]
        [Required(ErrorMessage = "O campo senha é obrigatório!")]
        [StringLength(60, MinimumLength = 6, ErrorMessage = "Senha deve conter de 6 á 60 caractéres!")]
        public string? Senha { get; set; }


        [Required(ErrorMessage = "Informe o tipo desse usuário!")]
        public Guid IdTiposUsuario { get; set; }
        //instancia a propriedade do tipo estudio para fazer a referencia com a foreignKey de IdTiposUsuario
        [ForeignKey(nameof(IdTiposUsuario))]
        public TiposUsuario? TipoDeUsuario { get; set; }

    }
}
