# Aufgaben Tag 5 
21 Puntke ca. 45 Min.
- 10 Punkte einfach
- 5 Punkte mittel
- 6 Punkte schwer
- (Durchschnitt  17 Puntke = 5)

Benutzen Sie immer Materialize css und jQuery

## Aufgabe 1 (Punkte: 1)
Der text in dem Absatz soll mittig dargestellt werden : <p style="width:100%">text</p>

## Aufgabe 2 (Punkte: 1)
Der text in dem Absatz soll rechts dargestellt werden : <p style="width:100%">text</p>
 
## Aufgabe 3 (Punkte: 1)
Der text in dem Absatz soll links dargestellt werden : <p style="width:100%">text</p>

## Aufgabe 4 (Punkte: 1)
Schauen Sie sich die Vorlage.html an, und ändern Sie die Navigation - Link so, dass links jeweils das Icon und rechts der text vom Link erscheint.(im Moment ist der ja unterhalb)

## Aufgabe 5 (Punkte: 2)
wenn die Seite das erste mal geladen wird, soll link1 Farblich aktiviert, werden, dass der Benutzer weiss, welcher Link aktiv ist

## Aufgabe 6 (Punkte: 3)
wenn der Benutzer auf einen anderen Link klickt, soll dieser Link farblich aktiviert werden, und die anderen Links sollen wieder normal aussehen

## Aufgabe 7 (Punkte: 3)
wenn der Benutzer auf einen Link klickt, soll die Seite, die im Link angegeben ist, in ein div mit id="content" geladen werden.

## Aufgabe 8 (Punkte: 2)
Bei Auflösungen von 0 bis 800 Pixel soll die Hintergrundfarbe vom Body eine andere Farbe haben, als bei Auflösungen über 800 Pixel

## Aufgabe 9 (Punkte: 1)
Wann müssen Sie jQuery Doc ready benutzen? Können sie ein einfaches Beispiel geben?

> Wenn ich etwas ausführen möchte, das erst funktioniert, wenn das HTML geladen wurde.

Wenn ich ein Select mit Materialze initialisiere, muss ich auch warten bis das Element geladen wurde.

```jQuery
$('select').formSelect();
```

## Aufgabe 10 (Punkte: 2)
Es gibt noch zwei andere Möglichkeiten ohne Doc ready. Welche? Können Sie da auch ein einfaches Beispiel geben?

1. Einen Script-Tag am Ende eines Dokuments erstellen

```
<!DOCTYPE html>
<html>
    <head>
        <!-- -->
    </head>
    <body>
        <!-- -->

        <script>
            <!-- -->
        </script>
    </body>
</html>
```

2. Das Attribut defer im Script-Tag setzen

```
<!DOCTYPE html>
<html>
    <head>
        <!-- -->
    </head>
    <body>
        <script defer>
            <!-- -->
        </script>
        <!-- -->
    </body>
</html>
```

## Aufgabe 11 (Punkte: 2)
Sie haben auf einer Seite ein div mit id="content". Es gibt 3 Möglichkeiten, wie Sie den Inhalt setzen können. Welche?

1. html()
```
$('#content').html(<p>Hallo</p>);
```
2. innerHTML
```
document.getElementById('content').innerHtml = "<p>Hallo</p>";
```
3. appendChild
```
let el = document.createTextNode("Hallo");
document.getElementById('content).appendChild(el);
```

4. text();
```
$('#content).text('Hallo');
```

## Aufgabe 12 (Punkte: 1)
ein langer Text ist als Blocksatz zu formatieren
m
<p style="text-align: justify; width: 50%;">
Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, At accusam aliquyam diam diam dolore dolores duo eirmod eos erat, et nonumy sed tempor et et invidunt justo labore Stet clita ea et gubergren, kasd magna no rebum. sanctus sea sed takimata ut vero voluptua. est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat. Consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo</p>

## Aufgabe 13 (Punkte: 1)
es sollen alle Elemente mit der Klasse "test" ausgeblendet werden
