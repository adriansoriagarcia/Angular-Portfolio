import { Component } from '@angular/core';
import { Project } from '../project.interface';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent {

  projects:Array<Project>= [
    {name: 'Aplicación Meteorológica.',
    description: 'Aplicación meteorologica en la cual te muestra la temperatura actual, viento, humedad, visibilidad y presión, ademas de el tiempo para varios dias de la semana.',
    img: '../../assets/img/weather.PNG',
    button1: 'https://wheater-app-asg.netlify.app/',
    button2: 'https://github.com/adriansoriagarcia/appWeather',
    technologies: 'HTML, CSS, JS'},
    

    {name: 'Proyecto Manitas',
    description: 'Aplicación Hibrida en Ionic, es un CRUD donde puedes crear y modificar reparaciones, utiliza firebase para la BBDD y registro de usuarios. ',
    img: '../../assets/img/proyecto-manitas.png',
    button1: 'https://proyecto-manitas.netlify.app/',
    button2: 'https://github.com/adriansoriagarcia/proyecto-manitas',
    technologies: 'Angular, TypeScript, Ionic'},

    {name: 'Noticias El Mundo',
    description: 'Aplicación web donde se muestran las noticias de la portada del periodico El Mundo, actualizadas diariamente donde se puede ver una imágen, el autor, título y descripción.',
    img: '../../assets/img/elmundo.png',
    button1: 'https://elmundoportada.netlify.app/',
    button2: 'https://github.com/adriansoriagarcia/NoticiasElMundo',
    technologies: 'CSS, Angular, TypeScript'},

    {name: 'Harry Potter',
    description: 'Aplicación web donde muestra los personajes de la saga Harry Potter, además de imágenes e información sobre ellos como el género, la fecha de nacimiento, color de los ojos, etc.',
    img: '../../assets/img/hp.png',
    button1: 'https://characters-harry-potter.netlify.app/',
    button2: 'https://github.com/adriansoriagarcia/Harry-Potter',
    technologies: 'React, Typescript'}
  ];
   
}
