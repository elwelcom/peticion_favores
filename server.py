#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import http.server
import socketserver
import socket
import json
import sys
import io

# Force UTF-8 output on Windows
sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')
sys.stderr = io.TextIOWrapper(sys.stderr.buffer, encoding='utf-8')

PORT = 5501

# Colores para la consola
class Colors:
    RESET = '\033[0m'
    BRIGHT = '\033[1m'
    GREEN = '\033[32m'
    CYAN = '\033[36m'
    YELLOW = '\033[33m'
    RED = '\033[31m'
    MAGENTA = '\033[35m'

def get_best_ip():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
        s.connect(("8.8.8.8", 80))
        ip = s.getsockname()[0]
        s.close()
        return ip
    except:
        return "localhost"

def print_box(text, width=70):
    line = '=' * width
    padding = ' ' * max(0, (width - len(text)) // 2)
    print(f"{Colors.CYAN}+{line}+{Colors.RESET}")
    print(f"{Colors.CYAN}|{Colors.RESET}{padding}{Colors.BRIGHT}{text}{padding}{Colors.RESET}{Colors.CYAN}|{Colors.RESET}")
    print(f"{Colors.CYAN}+{line}+{Colors.RESET}")

def print_separator():
    print(f"{Colors.CYAN}{'-' * 72}{Colors.RESET}")

class MyHandler(http.server.SimpleHTTPRequestHandler):
    def do_GET(self):
        if self.path == '/api/server-info':
            best_ip = get_best_ip()
            self.send_response(200)
            self.send_header('Content-Type', 'application/json')
            self.send_header('Access-Control-Allow-Origin', '*')
            self.end_headers()
            response = json.dumps({
                'bestIP': best_ip,
                'adminUrl': f'http://{best_ip}:{PORT}/admin.html',
                'formUrl': f'http://{best_ip}:{PORT}/Sistema_de_peticion_de_favores_fremium.html'
            })
            self.wfile.write(response.encode())
            return
        if self.path == '/':
            self.path = '/admin.html'
        return http.server.SimpleHTTPRequestHandler.do_GET(self)

if __name__ == "__main__":
    ip = get_best_ip()
    
    print('\n')
    print_box('  🎉 OFFICIAL FAVOR SYSTEM 2026™ - SERVER STARTED  🎉  ')
    print('\n')
    
    print_separator()
    print(f"{Colors.BRIGHT}{Colors.YELLOW}  SERVER INFORMATION / INFORMACION DEL SERVIDOR{Colors.RESET}")
    print_separator()
    print()
    print(f"  {Colors.GREEN}* Network IP:{Colors.RESET}      http://{ip}:{PORT}")
    print(f"  {Colors.GREEN}* Localhost:{Colors.RESET}       http://localhost:{PORT}")
    print()
    
    print_separator()
    print(f"{Colors.BRIGHT}{Colors.YELLOW}  IMPORTANT LINKS / ENLACES IMPORTANTES{Colors.RESET}")
    print_separator()
    print()
    print(f"  {Colors.CYAN}* Admin Panel:{Colors.RESET}")
    print(f"     http://{ip}:{PORT}/admin.html")
    print()
    print(f"  {Colors.CYAN}* Favor Form:{Colors.RESET}")
    print(f"     http://{ip}:{PORT}/Sistema_de_peticion_de_favores_fremium.html")
    print()
    
    print_separator()
    print(f"{Colors.BRIGHT}{Colors.YELLOW}  QUICK START / INICIO RAPIDO{Colors.RESET}")
    print_separator()
    print()
    print(f"  {Colors.MAGENTA}ENGLISH:{Colors.RESET}")
    print("     1. Open the Admin URL above in your browser")
    print("     2. Enter your email address")
    print("     3. Copy the generated link and share it!")
    print()
    print(f"  {Colors.MAGENTA}ESPANOL:{Colors.RESET}")
    print("     1. Abre la URL de Admin en tu navegador")
    print("     2. Introduce tu direccion de email")
    print("     3. Copia el enlace generado y compartelo!")
    print()
    
    print_separator()
    print(f"{Colors.BRIGHT}{Colors.YELLOW}  TIPS / CONSEJOS{Colors.RESET}")
    print_separator()
    print()
    print(f"  {Colors.YELLOW}Firewall:{Colors.RESET} If Windows asks, click \"Allow Access\"")
    print("           Si Windows pregunta, haz clic en \"Permitir acceso\"")
    print()
    print("  * Share the link with your friends on the same WiFi network")
    print("    Comparte el enlace con tus amigos en la misma red WiFi")
    print()
    
    print_separator()
    print(f"{Colors.BRIGHT}{Colors.GREEN}  Server running on port {PORT} / Servidor ejecutandose en puerto {PORT}{Colors.RESET}")
    print_separator()
    print()
    print(f"  {Colors.YELLOW}Press Ctrl+C to stop / Presiona Ctrl+C para detener{Colors.RESET}")
    print()
    
    try:
        with socketserver.TCPServer(("", PORT), MyHandler) as httpd:
            httpd.serve_forever()
    except OSError as e:
        if e.errno == 10048:  # Windows error for address already in use
            print('\n')
            line = '=' * 72
            print(f"{Colors.CYAN}{line}{Colors.RESET}")
            print(f"{Colors.BRIGHT}{Colors.RED}  ERROR - PORT ALREADY IN USE / PUERTO YA EN USO{Colors.RESET}")
            print(f"{Colors.CYAN}{line}{Colors.RESET}")
            print()
            print(f"{Colors.RED}  The port {PORT} is already being used by another program.{Colors.RESET}")
            print(f"{Colors.RED}  El puerto {PORT} ya esta siendo usado por otro programa.{Colors.RESET}")
            print()
            print(f"{Colors.YELLOW}  SOLUTIONS / SOLUCIONES:{Colors.RESET}")
            print()
            print("  1. Stop the other server instance / Detener la otra instancia:")
            print("     - Close any other command windows running this server")
            print("     - Cierra cualquier otra ventana de comandos ejecutando este servidor")
            print()
            print("  2. Use a different port / Usar un puerto diferente:")
            print("     - Edit server.py and change PORT = 5501 to another number")
            print("     - Edita server.py y cambia PORT = 5501 a otro numero")
            print()
            print("  3. Find and close the process / Encontrar y cerrar el proceso:")
            print("     - Windows: Open Task Manager and end Node.js or Python processes")
            print("     - Windows: Abre el Administrador de tareas y finaliza procesos de Node.js o Python")
            print()
        else:
            print(f"{Colors.RED}Server error / Error del servidor: {e}{Colors.RESET}")
        sys.exit(1)
