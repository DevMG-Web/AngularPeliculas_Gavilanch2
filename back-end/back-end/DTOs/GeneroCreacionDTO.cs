﻿using back_end.Validaciones;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace back_end.DTOs
{
    public class GeneroCreacionDTO
    {
        [Required(ErrorMessage = "El campo {0} es requerido")]
        [StringLength(maximumLength: 50, ErrorMessage = "El campo {0} debe tener como maximo {1} caracteres")]
        [PrimeraLetraMayuscula]
        public string Nombre { get; set; }
    }
}
