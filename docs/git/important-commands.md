---
sidebar_position: 4
---

# Comandos fundamentales

# Comandos para configuración

## **Configuración básica:**

```bash
git config --global user.name "Tu Nombre"
git config --global user.email "tu@email.com"
```

## **Configuración avanzada:**

```bash
git config --global core.editor "code --wait"
```

Ver configuración actual:

```bash
git config --list
```

🔗 [Más sobre configuración en Git](https://git-scm.com/docs/git-config)


# Comandos imprescindibles


Inicializar un repositorio:

```bash
git init
```

Ver el estado del repositorio:

```bash
git status
```

Añadir cambios al área de staging:

```bash
git add <archivo>     # Archivo específico
git add .             # Todos los cambios
```

Crear un commit:

```bash
git commit -m "Mensaje descriptivo del cambio"
```

> ✅ **Consejo**: Los mensajes de commit deben ser claros, concisos y en infinitivo (ej. `Añadir función de login`).

Ver historial de commits:

```bash
git log
```

Versión resumida:

```bash
git log --oneline --graph --all
```

🔗 [Guía visual de `git log`](https://www.atlassian.com/git/tutorials/git-log)

Deshacer cambios:

```bash
git checkout <archivo>      # Restaurar archivo modificado
git reset                   # Volver al último commit
git reset --hard            # Borra cambios no confirmados
```

⚠️ ¡Cuidado con `--hard`!

## 🔁 **Recuperar cambios perdidos: `git reflog`**

Si cometes un error con `reset`, `checkout` o `rebase`, puedes recuperar tu trabajo con:

```bash
git reflog
``` 
Este comando muestra un historial interno de Git con todos los movimientos del repositorio (commits, cambios de rama, etc.), incluso si no aparecen en `git log`.

Ejemplo para restaurar un estado anterior:

```bash
git reset --hard HEAD@{1}
```
> 💡 git reflog es tu salvavidas cuando algo se borra por accidente.