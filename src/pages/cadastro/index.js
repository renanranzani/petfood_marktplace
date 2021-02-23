import Illustration from '../../assets/illustration.png'
import Header from '../../components/header'

const Cadastro = () => {
    return (
        <div className="container-fluid h-100 bg-primary">
            <Header whiteVersion/>
            <div className="row">
            <div className='col-6 text-right my-auto'>
                <img src={Illustration} className="img-fluid" alt="imagem-ilustracao" />
            </div>
            <div className='col-6'>
                <div className="box col-8">
                    <h2 className="text-center">Falta pouco pra fazer o seu pet feliz.</h2><br/>
                    <input type="text" className="form-control form-control-lg mb-3" placeholder="Nome completo"></input>
                    <input type="text" className="form-control form-control-lg mb-3" placeholder="E-mail"></input>
                    <input type="text" className="form-control form-control-lg mb-3" placeholder="Telefone"></input>
                    <input type="text" className="form-control form-control-lg mb-3" placeholder="CPF"></input>
                    <input type="date" className="form-control form-control-lg mb-3" placeholder="Data de Nascimento"></input>
                    <button className="btn btn-lg btn-block btn-secondary">
                        Finalizar Pedido
                    </button>
                </div>

            </div>
         </div> 
            
        </div>
    );
};

export default Cadastro;