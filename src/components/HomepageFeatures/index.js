import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Control de versiones con Git',
    Svg: require('@site/static/img/git.svg').default,
    description: (
      <>
        Aprende a gestionar el historial de tu código, crear ramas, fusionar
        cambios y trabajar de forma eficiente con <strong>Git</strong> desde cero.
      </>
    ),
  },
  {
    title: 'Colaboración con GitHub',
    Svg: require('@site/static/img/github.svg').default,
    description: (
      <>
        Descubre cómo usar <strong>GitHub</strong> para alojar tus repositorios,
        colaborar con otros desarrolladores y gestionar tus proyectos en la nube.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <div className={styles.svgWrapper}>
          <Svg className={styles.featureSvg} role="img" />
        </div>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row" style={{justifyContent: 'center'}}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}