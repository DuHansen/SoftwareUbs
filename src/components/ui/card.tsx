import React from 'react';
import Button from './button';

type CardProps = {
  image: string,
  name: string,
  lastMessage: string,
  time: string,
  linkGithub: string,
  linkDeploy: string
}

const Card = ({ image, name, lastMessage, time, linkGithub, linkDeploy }: CardProps) => {
  return (
    <div className="bg-white rounded-[10px] shadow border border-neutral-100 flex-col inline-flex p-4 gap-4 justify-around w-[350px]">
      <div className="flex items-center gap-2 inline-flex">
        <img className="h-10 w-10 rounded-full" src={image} alt="" />
        <div className="flex-col justify-start items-start gap-2 inline-flex">
          <h3 className="text-[#333] text-xl font-bold font-montserrat">
            {name}
          </h3>
          <p className="text-neutral-400 text-md font-medium font-lato]">
            {lastMessage}
          </p>
        </div>
        <p className="ml-auto text-neutral-400 text-md font-medium font-lato]">
          {time}
        </p>
      </div>
      <div className="justify-start items-start gap-2 inline-flex">
        <a href={linkGithub} target='_blank' rel="noreferrer">
          <Button size="md">GitHub</Button>
        </a>
        <a href={linkDeploy} target='_blank' rel="noreferrer">
          <Button size="md" mode="outline">
            Deploy
          </Button>
        </a>
      </div>
    </div>
  )
}

export default Card;
