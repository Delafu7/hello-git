---
sidebar_position: 4
---

# ¿Cómo hacer un Pull Request?

# Pasos

 1. **Haz un fork del repositorio (si no tienes acceso directo):**

  Ve al repositorio y haz clic en `Fork`.

 2. **Clona tu fork en tu máquina local:**

```bash
git clone https://github.com/tu-usuario/nombre-del-repo.git
cd nombre-del-repo
```

 3. **Crea una nueva rama para trabajar:**

  ```bash
  git checkout -b mi-nueva-feature
  ```
  4. **Haz tus cambios, guarda y haz commit:**

  ```bash
  git add .
  git commit -m "Añadir nueva funcionalidad"
  ```

   5. **Envía los cambios a tu repositorio en GitHub:**

  ```bash
  git push origin mi-nueva-feature
  ```

  6. **Abre el Pull Request desde GitHub:**

  - Ve a tu repositorio en GitHub.

  - Haz clic en el botón Compare & pull request.

  - Escribe un título y una descripción clara del cambio.

  - Haz clic en Create pull request.

---


# Consejos para buenos Pull Requests

- Sé descriptivo: explica qué problema soluciona y cómo.

- Mantén los cambios enfocados en una sola cosa.

- Usa mensajes de commit claros.

- Asegúrate de que el código compile y pase las pruebas.