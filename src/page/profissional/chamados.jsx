import React, { useEffect } from 'react'
import Card from '../../components/ui/button.tsx'
import AOS from 'aos'

const ContatosLista = [
  { nome: 'João', ultimaMensagem: 'Olá!', horario: '10:30', imagem: 'link_para_imagem' },
  { nome: 'Maria', ultimaMensagem: 'Tudo bem?', horario: '11:15', imagem: 'link_para_imagem' },
  // Adicione mais contatos conforme necessário
]

const Contatos = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    })
  }, [])
  return (
    <div style={{  overflow: 'hidden'}}
      id="contatos"
      className="flex flex-col justify-center items-center align-middle w-100 min-h-[90vh] gap-[5rem] p-4 bg-[#212121]"
    >
      <h2
        className="font-montserrat font-bold text-center text-maincolor text-4xl"
        data-aos="fade-up"
      >
        Chamados abertos
      </h2>
      <div
        className="grid md:grid-cols-2 xl:grid-cols-3 gap-[3rem]"
        data-aos="slide-up"
      >
        {ContatosLista.map(
          ({ nome, ultimaMensagem, horario, imagem }, index) => {
            return (
              <Card
                key={index}
                title={nome}
                subtitle={ultimaMensagem}
                text={horario}
                image={imagem}
              />
            )
          },
        )}
      </div>
    </div>
  )
}

export default Contatos
