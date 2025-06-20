# Comandos y consejos para conocer Git y GitHub

## Índice
- [Git](#git)
  - [Instalacion](#instalacion)
  - [Comandos de ayuda](#comandos-de-ayuda)
  - [Comandos para configuracion](#comandos-para-configuracion)
  - [Comandos imprescindibles](#comandos-imprescindibles)
- [GitHub](#github)
  - [Documentacion](#documentacion)

## Git

![imagen git](imagenes/git.png)

[Enlace a la página web oficial](https://git-scm.com/) 

### Instalacion

Si se quiere instalar git para Windows se debe de descargar a traves de este enlace:
[Enlace de Descarga](https://git-scm.com/downloads)

Si se quiere instalar git para masOS se debe de descargar introduciendo este comando en el terminal:

```bash
  brew install git
```

Si se quiere instalar git para Linux/Unix se debe de descargar con este comando:

```bash
    sudo apt-get install git
```
### Comandos de ayuda

| Comando | Descripción                                                                 |
|---------|------------------------------------------------------------------------------|
| git -v  | Nos muestra la versión actual descargada de git en nuestro sistema.          |
| git -h  | Muestra una lista de comandos y opciones disponibles.          |

### Comandos para configuracion

Para una configuración sencilla y básica de git usaremos el comando:

```bash
    git config
```

Si empleamos la flag --global, indicará a git que la configuración se aplicará a nivel global en nuestro equipo, a la hora de trabajar en git.

Como ejemplo configuramos nuestro nombre y email:

```bash
    git config --global user.name <nombre>
```
```bash
    git config --global user.email <email>
```

Para buscar más información sobre la configuración de git entra a este [enlace](https://git-scm.com/docs/git-config)
### Comandos imprescindibles

Para iniciar a trabajar con git debemos de inicializar un repositorio en nuestro proyecto. Con el terminal nos debemos situar en el directorio donde se encuentre el proyecto y ejecutaremos este código:

```bash
    git init
```

Por defecto la rama principal en la que trabajaremos en nuestro proyecto será la rama **main**. Pero puede pasar que tengamos configurada la rama principal que sea **master**. Para cambiar la rama actual de nuestro proyecto usamos este comando:

```bash
    git branch -m main
```

Para comprobar aquellos cambios que han sido realizados en el repositorio y no han sido o bien actualizados (**pull**)  o guardado una imagen de los cambios en el repositorio (**commit**), usaremos este comando:

```bash
    git status
```

Para añadir los cambios realizados en la fotografia del repositorio que vamos a almacenar empleando git es:

- Para un archivo modificado:

    ```bash
        git add <archivo>
    ```

- Para todos los archivos modificados:

    ```bash
        git add .
    ```
Para almacenar la fotografia creada vamos a emplear, el comando:

```bash
    git commit -m "<mensaje>"
```

**¡¡¡IMPORTANTE!!!**: Son buenas prácticas realizar commits donde contengan grandes cambios realizados en el proyecto y cuyos mensajes sean muy significativos.


Para visualizar las fotografias realizadas en un repositorio de git se utiliza el comando:

```bash
    git log
```
Existen diferentes formas de visualizar las fotografias en un repositorio de git. Pero todas ellas son variantes del comando de **git log**. Aqui os dejo un enlace significativo de esta funcionalidad:[variantes-log](https://www.atlassian.com/git/tutorials/git-log)



## GitHub 

![imagen github](imagenes/github.png)

[Enlace a la página web oficial](https://github.com/) 

### Documentacion


[Enlace de Documentación](https://docs.github.com/es)

```bash
  
```
