---
sidebar_position: 9
---

# Submodulos and Hooks

# Submódulos
Los submódulos te permiten incluir repositorios Git dentro de otro, útil si trabajas con dependencias internas o microservicios.

Añadir un submódulo:
```bash
git submodule add https://github.com/usuario/proyecto-libreria.git ruta/
```

Clonar un repositorio con submódulos:
```bash
git clone --recurse-submodules <url>
```

Inicializar y actualizar submódulos:
```bash
git submodule init
git submodule update
```

Actualizar submódulos a la última versión del remoto:
```bash
git submodule update --remote
```
---

# Git Hooks

Los hooks son scripts que se ejecutan automáticamente antes o después de acciones como commit, push o merge.

Se guardan en `.git/hooks/`, y puedes personalizarlos para:
- Ejecutar linters
- Validar mensajes de commit
- Correr tests antes del push
Ejemplo: `pre-commit`
```bash
#!/bin/sh
npm run lint
```
Actívalo copiando el script en `.git/hooks/pre-commit` y dándole permisos:

```bash
chmod +x .git/hooks/pre-commit
```

>💡 Herramientas como [Husky](https://typicode.github.io/husky/) te ayudan a gestionar hooks en proyectos modernos.
