# React Task: Food Menu Filter

### Filter: Select Box

### Filter Options:

  All
  South Indian Food
  North Indian Food
  Chinese


### Food Menu Requirements

Case 1: Initial Load

  When the component loads initially, display all food items.

  ```

Filter:
[ All ▼ ]

Food Menu:
--------------------------------
Id    Food Name        Category
--------------------------------
1     Idli             South Indian
2     Dosa             South Indian
3     Paneer Tikka     North Indian
4     Fried Rice       Chinese
5     Naan             North Indian
6     Noodles          Chinese

```

Case 2: Filter Selection

  When the user selects a category from the dropdown, display only the food items belonging to that category.
  If the user selects All, display all food items again.

```
Select → South Indian Food

Food Menu:
Idli
Dosa

```

```
Select → North Indian Food

Food Menu:
Paneer Tikka
Naan

```

```
Select → All

Food Menu:
Idli
Dosa
Paneer Tikka
Fried Rice
Naan
Noodles

```

This is a good React exercise for practicing useState, onChange, and filter().#