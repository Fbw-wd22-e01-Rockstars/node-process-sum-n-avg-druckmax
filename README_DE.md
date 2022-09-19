# Summe N' Durchschnitt

Erstelle ein Programm, das eine auszuführende Operation ("sum" oder "avg") und eine Reihe von Zahlen als Argumente annimmt. Das Programm soll das Ergebnis der Berechnung auf dem Terminal ausgeben.

## Beschränkungen:

- Das erste Argument kann nur entweder die Zeichenkette "sum" oder die Zeichenkette "avg" sein. Ist dies nicht der Fall, sollte das Programm beendet werden und eine Meldung an den Benutzer ausgeben (siehe Beispiele unten).

- Alle folgenden Argumente müssen Zahlen sein. Wenn eines der Argumente keine Zahl ist, sollte das Programm beendet werden und eine Nachricht an den Benutzer ausgeben (siehe Beispiele unten).

## Beispiele:

### Berechnen der Summe

```bash
$ node solution.js sum 1 2 3 4
> 10
```

### Berechnen des Durchschnitts

```bash
$ node solution.js avg 1 2 3 4
> 2.5
```

### Falscher Name der Operation

```bash
$ node solution.js oops 1 2 3 4
> 'I cannot calculate that, please type either "sum" (to calculate the sum) or "avg" (To calculate the Average)'
```

### Falscher Typ

```bash
$ node solution.js sum 1 hello 3 4
> "Sorry, the argument 'hello' is not a number, please try again"
```

## Bonus:

Füge die Unterstützung für eine zusätzliche Operation, `"med"`, hinzu, die die [**_Median_**](https://en.wikipedia.org/wiki/Median) Zahl in der Menge berechnet. Um den Median zu berechnen, musst du die folgenden Schritte befolgen:

1. Sortiere die Menge der Zahlen
2. Bestimme den Index der mittleren Zahl, indem du den letzten Index der Menge durch zwei teilst: `<last index> / 2`.
3. Wenn der resultierende Index eine ganze Zahl ist (z.B. 7), dann ist der Mittelwert der Menge der Wert in diesem Index.
4. Andernfalls (wenn die Zahl ein Bruchteil ist, z. B. 7,5) wird der Median berechnet, indem die beiden Werte in den Indizes um ihn herum addiert werden (bei 7,5 wären das 7 und 8) und durch zwei geteilt werden.

**_Beispiel (a)_**: Für die Menge 4 ,7, 8, 11, 24 wäre der Medianindex 2 (letzter Index: 4, 4 / 2 = 2) und der Medianwert ist 8 (die Zahl an Position 2).

**_Beispiel (b)_**: Für die Menge 1, 12, 15, 21 wäre der Medianindex 1,5 (letzter Index: 3, 3 / 2 = 1,5) und der Medianwert wäre 13,5 (die Zahl an Position 1: **12** + die Zahl an Position 2: **15** = **27**, 27 / 2 = 13.5).

### Beispiele

#### Ungerade Anzahl von Zahlen

```bash
$ node solution.js med 1 2 5 6 12
> 5
```

#### Gerade Anzahl von Zahlen

```bash
$ node solution.js med 1 2 3 4 5 6
> 3.5
```

#### Unsortierte Menge

```bash
$ node solution.js med 1 2 12 13 5 6
> 5.5
```
