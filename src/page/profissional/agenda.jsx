


import { useEffect } from "react";

import { Container } from "react-bootstrap";
import "../../App.css";

export default function Agenda() {

    return(
        
            <Container style={{marginTop: 100, alignItems: "center", justifyContent: "center", minHeight: "100vh"}}>
                   <h1>Agenda</h1>
            </Container>
    );

  useEffect(() => {
    const cards = document.querySelectorAll('.card');
    const columns = document.querySelectorAll('.column');

    cards.forEach(card => {
      card.addEventListener('dragstart', dragStart);
      card.addEventListener('touchstart', touchStart);
      card.addEventListener('touchmove', touchMove);
      card.addEventListener('touchend', touchEnd);
    });

    columns.forEach(column => {
      column.addEventListener('dragover', dragOver);
      column.addEventListener('drop', drop);
      column.addEventListener('touchmove', touchMove);
      column.addEventListener('touchend', touchEnd);
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('dragstart', dragStart);
        card.removeEventListener('touchstart', touchStart);
        card.removeEventListener('touchmove', touchMove);
        card.removeEventListener('touchend', touchEnd);
      });

      columns.forEach(column => {
        column.removeEventListener('dragover', dragOver);
        column.removeEventListener('drop', drop);
        column.removeEventListener('touchmove', touchMove);
        column.removeEventListener('touchend', touchEnd);
      });
    };
  }, []);

  function dragStart(event) {
    event.dataTransfer.setData('text/plain', event.target.id);
  }

  function dragOver(event) {
    event.preventDefault();
  }

  function drop(event) {
    event.preventDefault();
    const cardId = event.dataTransfer.getData('text/plain');
    const card = document.getElementById(cardId);
    const column = event.target;
    column.appendChild(card);
    saveColumn(cardId, column.id);
  }

  function touchStart(event) {
    const touch = event.touches[0];
    event.target.dataset.touchId = touch.identifier;
    event.target.dataset.startX = touch.clientX;
    event.target.dataset.startY = touch.clientY;
  }

  function touchMove(event) {
    event.preventDefault();
    const touch = event.touches[0];
    const card = document.querySelector(`[data-touch-id="${touch.identifier}"]`);
    if (card) {
      card.style.position = 'absolute';
      card.style.left = `${touch.clientX - card.offsetWidth / 2}px`;
      card.style.top = `${touch.clientY - card.offsetHeight / 2}px`;
    }
  }

  function touchEnd(event) {
    const touch = event.changedTouches[0];
    const card = document.querySelector(`[data-touch-id="${touch.identifier}"]`);
    if (card) {
      card.style.position = 'static';
      const column = document.elementFromPoint(touch.clientX, touch.clientY);
      if (column && column.classList.contains('column')) {
        column.appendChild(card);
        saveColumn(card.id, column.id);
      }
    }
  }

  function saveColumn(cardId, columnId) {
    localStorage.setItem(cardId, columnId);
  }

  return (
    <Container style={{ marginTop: 100, alignItems: "center", justifyContent: "center", minHeight: "100vh" }}>
      <div className="column" id="column1">
        <div className="card" draggable="true" id="card1">Card 1</div>
      </div>
      <div className="column" id="column2"></div>
    </Container>
  );

}
