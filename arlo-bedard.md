# Arlo Bédard

Revue de code du TP1 de Laurent Ferland-Girouard

## Code

**Lisibilité et propreté du code**

- Le code aurait pu être séparé en plus de _components_ différents.
- Répétition du code du form de l'ajout et de la modification.
- L'ajout d'un constructeur du type de l'item aurait été intéressant pour éviter la répétition du code.
- Le nommage des variables est clair!

**Bonnes pratiques**

- Documentation: [listes complètes des bonnes pratiques](https://appweb.progwmj.ca/documentations/bonnes-pratiques/code).

* Bonne documentation de l'utilisation de ChatGPT😄.
* Utilisation de **quelques** chaines magiques.

**Respect des normes et standards**

Documentation: [listes complètes des normes et standards](https://appweb.progwmj.ca/documentations/normes).

- Lignes de codes laissées en commentaire qui aurait dû être supprimées.

```js{4}
//const itemsList = document.querySelector('#myList') as HTMLUListElement;
//const parent = useTemplateRef('itemsList');export default {
```

- Texte de l'application en anglais

```html{4}
<div :style="{'color': (dndItem.quantity != null && dndItem.quantity>0) ? 'green':'red'} ">
  quantity: {{ dndItem.quantity }}
</div>
```

## Autres

- Tout est beau pour cette partie!
