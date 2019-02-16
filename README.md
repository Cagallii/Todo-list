## Commandes à lancer

Pour lancer le projet:

### `yarn`

Installe les packages du projet

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## But de l'exercice

### Remplacer le form submit par un event sur élément du dom

Un form permets de déclencher la fonction onSubmit de ce dernier par le click d'un élément button à l'interieur de celui-ci.

Il exist une autre façon de parvenir au même résultat.
Il faut supprimer le form et utiliser l'évenement `onClick` disponible sur tous les éléments du dom.

On peut par exemple garder l'élément button ici présent ou bien utiliser une balise <div/> et affecter à l'event onClick une fonction

```
<form onSubmit={this.handleSubmit}>
<label htmlFor="new-todo">What needs to be done?</label>
<input
    id="new-todo"
    onChange={this.handleChange}
    value={this.state.text}
    />
<button>Add #{this.state.items.length + 1}</button>
</form>
```

### Ajouter une classe TodoListItem

La classe TodoList :

```
export default class TodoList extends Component {
  static propTypes = {
    items: T.arrayOf(item),
  };
  render() {
    return (
      <ul>
        {this.props.items.map(item => <li key={item.id}>{item.text}</li>)}
      </ul>
    );
  }
}
```

Ici, le code est juste. Mais un peu de refactoring ne ferait pas de mal.
On peut décomposer la TodoList en 2 parties:

- La liste
- une ligne

Il faut donc extraire la partie item(une ligne) dans un fichier `Item.js`.
Il faudra ensuite importer l'Item dans la TodoList et remplacer l'ancien code par le composant Item.

### Ajouter la suppression d'un item de la TodoListe

Ici il va falloir ajouter un bouton (balise button ou div) et créer une fonction qui va gérer la suppression de l'élément correspondant dans la liste.

Pour se faire, il faudra ajouter une props `onDelete` au composant Item et TodoList précédemment créé. C'est ce qu'on appel un `eventHandler`.
On va délégué l'événemment de suppression à la classe TodoList qui elle même va déléguer la suppression à la classe parente.

C'est cette classe parente (App.js) qui gère la liste de données, c'est donc elle qui doit effectuer l'action de supprimer un élément de la liste dans la fonction du onDelete.

Voici un exemple :

```
 <TodoList onDelete={this.handleDelete} items={this.state.items} />
```

```
 <Item onDelete={this.props.onDelete} ...otherProps/>
```

```
 export default class Item extends Component {
  render() {
    return (
      <li>{this.props.data.text}
        <div onClick={this.props.onDelete}>Supprimer</div>
      </li>
    );
  }
}
```

### Ajouter la possibilité de cocher un item

Il faut ajouter un input de type checkbox. Si t'en es la go voir google comment ca marche j'ai pas le temps la ^^

### Mise en forme de la TodoList

Pareil, fait ca en dernier. Je complèterais plutard
