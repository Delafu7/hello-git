---
sidebar_position: 5
---
# Alias and Tags

# Alias
  Git nos permite crear alias, para ejecutar comandos largos y complejos de forma sencilla y eficaz.
  ```bash
    git config --global --alias.<palabra> <comando>

  ```
La `<palabra>` es la palabra que vamos a identificar para el comando representado como `<comando>`

## Alias útiles

Crear alias personalizados:

```bash
git config --global alias.st status
git config --global alias.co checkout
git config --global alias.br branch
git config --global alias.ci commit
git config --global alias.lg "log --oneline --graph --all"
```
----

# Git Tag

El comando `git tag` se utiliza para crear **etiquetas** en puntos específicos del historial de commits, normalmente para **marcar versiones** importantes (por ejemplo: `v1.0`, `v2.1`, etc.).

Estas etiquetas son útiles para:

- Identificar versiones estables de tu proyecto.
- Marcar lanzamientos (releases).
- Volver fácilmente a un punto específico del desarrollo.


## 📌 **Tipos de etiquetas**

| Tipo            | Descripción |
|------------------|-------------|
| `lightweight`    | Es como un marcador simple a un commit. No tiene metadatos ni mensaje. |
| `annotated`      | Incluye información como nombre del autor, fecha, mensaje y firma opcional. Ideal para versiones públicas. |


## **Comandos útiles:**

Crear una etiqueta ligera:

```bash
git tag v1.0
```
Crear una etiqueta anotada:

```bash
git tag -a v1.0 -m "Versión 1.0 estable"
```
Ver todas las etiquetas:
```bash
git tag
```
Ver detalles de una etiqueta anotada:

```bash
git show v1.0
```
Etiquetar un commit específico (por hash):

```bash
git tag -a v1.1 abc1234 -m "Versión 1.1 sobre commit específico"
```

Compartir etiquetas:
Por defecto, las etiquetas no se suben con `git push`. Para enviarlas:
```bash
git push origin v1.0        # Una etiqueta
git push origin --tags      # Todas las etiquetas
```
Eliminar etiquetas:
- Localmente:
```bash
git tag -d v1.0
```
- En el repositorio remoto:
```bash
git push origin --delete tag v1.0
```
> 📝 **Consejo**: Usa etiquetas anotadas (-a) para versiones importantes. Facilitan el mantenimiento y seguimiento del proyecto.
