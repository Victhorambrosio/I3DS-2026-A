using System.ComponentModel.DataAnnotations;

namespace PrimeiraAPI.Models
{
    public class Curso
    {
        public Guid CursoId { get; set; }
        // Guid = Identificador único, para identificar de forma única cada curso
        [Required]
        public string? Nome { get; set; }
        // string? = O nome do curso pode ser nulo, ou seja, não é obrigatório
        [Required]
        public int Semestres { get; set; }
        // Int = O número (inteiro) de semestres do curso, é obrigatório
        public bool? Ativo { get; set; }
        // Bool? = Indica se o curso está ativo ou não
        [DataType(DataType.Currency)]
        public decimal Mensalidade { get; set; }
        // Decimal = O valor da mensalidade do curso
        // Propriedade de navegação para Relação N:M Muitos-para-Muitos com Curso
        public ICollection<Aluno> Alunos { get; set; } = new List<Aluno>();
    }
}
