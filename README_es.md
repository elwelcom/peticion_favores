# 🎉 Sistema Oficial de Favores 2026™

El sistema más burocrático para pedir favores en tu oficina. ¡Gratis, sin registro y listo en 2 minutos!

## 🚀 Empezar en 2 minutos

### Windows (más fácil)
1. Descarga el repositorio
2. Haz doble clic en `INICIAR_SERVIDOR.bat`
3. Copia la URL que aparece y compártela

## 📋 Instrucciones completas

### Para ti (admin)
1. Inicia el servidor (doble clic en `INICIAR_SERVIDOR.bat`)
2. Si Windows pregunta sobre el firewall, haz clic en **"Permitir acceso"**, sino tendrás que liberar el puerto 5501 para que los demás puedan conectarse a ti.
3. Abre `http://localhost:5501/admin.html`
4. Escribe tu email donde recibirás las solicitudes
5. El sistema detecta tu IP automáticamente
6. Guarda y copia el enlace generado
7. ¡Comparte el enlace con tus compañeros!

### Para tus compañeros
1. Abren el enlace que les compartiste
2. Aceptan los términos (muy importantes y serios)
3. Ven 5 segundos de publicidad para ganar 1 punto (favor)
4. Llenan el formulario absurdamente burocrático
5. ¡Te llega un email con la solicitud!

## 🔥 Problemas con el firewall

Si otros dispositivos no pueden acceder al servidor:

**Windows:**
1. Busca "Firewall de Windows" en el menú inicio
2. Ve a "Permitir una aplicación a través del firewall"
3. Busca "Node.js" o "Python" y actívalos
4. O simplemente haz clic en "Permitir acceso" cuando Windows pregunte

**McAfee, Avira, Kaspersky, etc.:**
1. Busca la aplicación de tu antivirus
2. Ve a la sección de firewall/red
3. Permite las conexiones para Node.js o Python

## 📂 Archivos

- `admin.html` - Panel para configurar tu email
- `Sistema_de_peticion_de_favores_fremium.html` - Formulario para pedir favores
- `server.js` / `server.py` - Servidor local
- `INICIAR_SERVIDOR.bat` - Iniciar servidor (Windows)

## ❓ Preguntas frecuentes

**¿Cuánto cuesta?**
Nada. Totalmente gratis.

**¿Necesito registrarme en algún lado?**
No. Solo abre los archivos y listo.

**¿Los emails son reales?**
Sí, se envían usando FormSubmit.co (gratis hasta 50 emails/mes).

**¿Funciona en móviles?**
Sí, siempre estén en el mismo Wifi que tu servidor.

**¿El servidor debe estar siempre encendido?**
Sí, para que otros puedan acceder.

## 🔧 Solución de problemas

**No puedo acceder desde otro dispositivo**
→ Verifica que el firewall permita las conexiones
→ Asegúrate de estar en el mismo WiFi
→ Copia la URL que muestra el servidor (no uses localhost)

**Los emails no llegan**
→ Revisa spam
→ La primera vez debes confirmar el email de FormSubmit.co

**El servidor no inicia (puerto ocupado)**
→ El puerto 5501 está ocupado
→ Cierra otras aplicaciones que usen ese puerto
→ O cambia el puerto en server.js y server.py

**El servidor no inicia**
→ Instala Node.js desde https://nodejs.org/

## 📝 Licencia

MIT - Haz lo que quieras con esto, pero no me eches la culpa de nada.

---

Hecho con humor y burocracia
