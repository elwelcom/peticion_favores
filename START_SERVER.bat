@echo off
title Official Favor System 2026 - Server
color 0A

cls
echo.
echo ================================================================
echo.
echo      OFFICIAL FAVOR SYSTEM 2026 - SERVER STARTER
echo      SISTEMA OFICIAL DE FAVORES 2026 - INICIADOR
echo.
echo ================================================================
echo.

REM Check if port 5501 is already in use
netstat -ano | findstr ":5501" >nul 2>&1
if not errorlevel 1 (
    echo.
    echo [ERROR] Port 5501 is already in use / El puerto 5501 ya esta en uso
    echo.
    echo --------------------------------------------------------
    echo  SOLUTIONS / SOLUCIONES:
    echo --------------------------------------------------------
    echo.
    echo  1. Close other server windows and try again
    echo     Cierra otras ventanas del servidor e intenta de nuevo
    echo.
    echo  2. Open Task Manager and end Node.js or Python processes
    echo     Abre Administrador de tareas y finaliza procesos de Node.js o Python
    echo.
    echo.
    pause
    exit /b 1
)

REM Try Node.js first
node --version >nul 2>&1
if not errorlevel 1 (
    echo.
    echo [OK] Node.js detected
    echo.
    echo --------------------------------------------------------
    echo  Starting server with Node.js...
    echo  Iniciando servidor con Node.js...
    echo --------------------------------------------------------
    echo.
    echo IMPORTANT:
    echo   If Windows Firewall appears, click "Allow Access"
    echo   Si aparece el Firewall de Windows, haz clic en "Permitir acceso"
    echo.
    echo --------------------------------------------------------
    echo  START HERE / EMPIEZA AQUI:
    echo  http://localhost:5501/admin.html
    echo --------------------------------------------------------
    echo.
    node server.js
    goto end
)

REM Try Python
python --version >nul 2>&1
if not errorlevel 1 (
    echo.
    echo [OK] Python detected
    echo.
    echo --------------------------------------------------------
    echo  Starting server with Python...
    echo  Iniciando servidor con Python...
    echo --------------------------------------------------------
    echo.
    echo IMPORTANT:
    echo   If Windows Firewall appears, click "Allow Access"
    echo   Si aparece el Firewall de Windows, haz clic en "Permitir acceso"
    echo.
    echo --------------------------------------------------------
    echo  START HERE / EMPIEZA AQUI:
    echo  http://localhost:5501/admin.html
    echo --------------------------------------------------------
    echo.
    python server.py
    goto end
)

REM Try Python3
python3 --version >nul 2>&1
if not errorlevel 1 (
    echo.
    echo [OK] Python3 detected
    echo.
    echo --------------------------------------------------------
    echo  Starting server with Python3...
    echo  Iniciando servidor con Python3...
    echo --------------------------------------------------------
    echo.
    echo IMPORTANT:
    echo   If Windows Firewall appears, click "Allow Access"
    echo   Si aparece el Firewall de Windows, haz clic en "Permitir acceso"
    echo.
    echo --------------------------------------------------------
    echo  START HERE / EMPIEZA AQUI:
    echo  http://localhost:5501/admin.html
    echo --------------------------------------------------------
    echo.
    python3 server.py
    goto end
)

REM Nothing found
echo.
echo [ERROR] Neither Node.js nor Python found
echo [ERROR] No se encontro Node.js ni Python
echo.
echo ================================================================
echo.
echo  INSTALL ONE OF THE FOLLOWING:
echo  INSTALA UNO DE LOS SIGUIENTES:
echo.
echo  Option 1: Node.js (Recommended)
echo   - https://nodejs.org/
echo.
echo  Option 2: Python
echo   - https://python.org/
echo.
echo ================================================================
echo.
echo After installing, run this file again.
echo Despues de instalar, ejecuta este archivo de nuevo.
echo.
pause
exit /b 1

:end
echo.
echo Server stopped / Servidor detenido.
echo.
pause
