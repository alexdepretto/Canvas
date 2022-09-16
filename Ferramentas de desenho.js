// Ferramentas de desenho

    function inicio() { desenho.beginPath() }
    
    function ponto(x, y) { desenho.moveTo(x,y) }
    
    function linha(x, y) { desenho.lineTo(x,y) }
    
    function arco(xc, yc, r, ti, tf, texto) { desenho.arc(xc, yc, r, ti, tf, texto) }
    
    function pintarRet(xr, yr, w, h) { desenho.fillRect(xr, yr, w, h) }
    
    function contornoRet(xr, yr, w, h) { desenho.strokeRect(xr, yr, w, h) }
    
    function cor(x) { desenho.fillStyle=x }
    
    function pintar() { desenho.fill() }
    
    function corLinha(x) { desenho.strokeStyle=x }
    
    function contorno() { desenho.stroke() }
    
    function limpar() { desenho.clear() }
    
    function limparRet(xr, yr, w, h) { desenho.clearRect(xr, yr, w, h) }
