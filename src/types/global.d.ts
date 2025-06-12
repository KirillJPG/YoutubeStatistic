declare module '*.module.scss' {
  const classes: { [key: string]: string };
  export default classes;
}
declare module '*.wav';
declare module '*.mp3';
declare module '*.svg' {
    import React = require('react');
    const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
    export default ReactComponent;
}