# QueryJS
Una alternativa de JQuery solo con las funciones esenciales básicas!

DOCUMENTACIÓN:

QueryJS (selector):
Con esta función inicializamos la Biblioteca, la función recibe un selector del elemento como parámetro y nos da una estructura JSON con las funciones.

Selección de un elemento:

Cuando colocamos el selector de un solo elemento, la función QueryJS nos da las siguientes opciones:

  Funciones de clase:
    QueryJS (selector) .class.getClass (clase):
    Con esta función podemos obtener todas las clases de un elemento; esta función puede recibir un parámetro (cadena) para encontrar una clase específica, pero esto no es totalmente necesario. Sin el parámetro, la función descarta cada clase en una cadena.
    
    QueryJS (selector) .class.setClass (clase):
    Con esta función podemos establecer clases para el elemento; esta función recibe una cadena como parámetro, la cadena es el nombre de la nueva clase.
  
    QueryJS (selector) .class.hasClass (clase):
    Con esta función podemos comprobar si un elemento tiene una clase específica; esta función recibe una cadena como parámetro (el nombre de la clase).
  
    QueryJS (selector) .class.toggleClass (clase):
    Esta función recibe una cadena como un parámetro (el nombre de la clase evaluada) y verifica si la clase existe en el elemento, si existe, esta clase se eliminará; de lo contrario, la clase se agregará al elemento.
    
  Función de los padres:
    
    QueryJS (selector) .parent ():
    Esta función devuelve el elemento primario del elemento seleccionado con la estructura generada por la función QueryJS.
    
  Funciones infantiles:
    
    QueryJS (selector) .children.first ():
    Esta función devuelve los primeros elementos secundarios del elemento seleccionado con la estructura generada por la función QueryJS.
    
    QueryJS (selector) .children.all (índice):
    Esta función devuelve una matriz con cada elemento secundario del elemento seleccionado; si colocamos el parámetro (no es obligatorio), la función devuelve el elemento de la matriz en esa posición
    
  Función de los hermanos:
  
    QueryJS (selector) .siblings ():
    Devuelve todos los hermanos del elemento.
    
  Funciones del elemento:
  
    QueryJS (selector) .elemento [0]:
    Contiene el elemento seleccionado.
    
    QueryJS (selector) .element.html (valor):
    Con esta función podemos cambiar el contenido del elemento seleccionado, el parámetro (cadena) es el nuevo contenido del elemento.
    
    QueryJS (selector) .element.css (json / property, value):
    Con esta función podemos realizar cambios en el css del elemento seleccionado, el primer parámetro es una cadena o una estructura json, el json se usa cuando necesitamos cambiar dos o más propiedades, la cadena se usa cuando solo necesitamos cambiar una propiedad de css, en este caso podemos usar el segundo parámetro para establecer un valor en la propiedad.
    
    QueryJS (selector) .element.id (id):
    Podemos usar esto para establecer una nueva ID para el elemento, recibir el nuevo ID como parámetro.
    
    QueryJS (selector) .element.remove ():
    Esta función elimina el elemento.
    
  Funciones de eventos:
    
    QueryJS (selector) .element.event.add (tipo, función):
    Esta función recibe como un primer parámetro el tipo de evento (onclick, onmouseover, etc.) y como un segundo parámetro la función que se ejecutará cuando el evento esté activo.
    
    QueryJS (selector) .element.event.remove (evento):
    Esta función elimina el evento seleccionado, como parámetro recibe el nombre del evento.
    
    QueryJS (selector) .element.event.trigger (evento):
    Esta función ejecuta el evento seleccionado, como parámetro recibe el nombre del evento.
    
    QueryJS (selector) .element.event.get (evento):
    Esta función devuelve la función de evento seleccionada, como parámetro recibe el nombre del evento.
    
Dos o más elementos seleccionados:

Cuando colocamos el selector de dos o más elementos, la función QueryJS nos da las siguientes opciones.

  Funciones de los elementos:
    QueryJS (selector) .elements [0]:
    Esto nos da una matriz con todos los elementos con la estructura QueryJS.
    
    Incluir en las siguientes funciones:
      -QueryJS (selector) .elements.css (JSON / propety, valor).
      -QueryJS (selector) .elements.event.add (evento, función).
      -QueryJS (selector) .elements.event.remove (evento).
      -QueryJS (selector) .elements.remove ().
    Todo con las funcionalidades iguales de cuando solo seleccionamos un elemento.
