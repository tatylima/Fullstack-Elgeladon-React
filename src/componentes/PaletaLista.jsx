import { paletas } from "../mocks/paletas.js";
import './PaletaLista.css';
function PaletaLista() {
    return <div className="PaletaLista">
  <div className="PaletaLista">
  {paletas.map((paleta, index) =>(
  <div className="PaletaListaItem" key={`PaletaListaItem-${index}`}>
			<div>
				<div className="PaletaListaItem__titulo"> {paleta.titulo} </div>
				<div className="PaletaListaItem__preco"> R$ {paleta.preco.toFixed(2)} </div>
				<div className="PaletaListaItem__descricao"> {paleta.descricao} </div>
				<div className="PaletaListaItem__acoes Acoes">
					<button className="Acoes__adicionar Acoes__adicionar--preencher">adicionar</button>
				</div>
			</div>
			<img className="PaletaListaItem__foto" src={paleta.foto} alt={`Paleta de ${paleta.sabor}`} />
		</div>
	))}
</div>
</div>;
}  
  
  export default PaletaLista;