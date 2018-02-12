// Generated by dia2code
#ifndef STATE__STATE__H
#define STATE__STATE__H

#include <vector>
#include <string>
#include <state/State.h>
#include <state/Element.h>

namespace state {
  class Element;
  class State;
}

#include "Element.h"

namespace state {

  /// class State - 
  class State {
    // Associations
    // Attributes
  public:
    std::vector<Element> list_element;
    std::string path;
    int enable_render;
    int  nb_hero;
    int enable_state;
    int nb_tower;
    int nb_center;
    int fin;
    int width     = 672;
    int height     = 672;
    std::vector<state::State> list_state;
    // Operations
  public:
    State ();
    ~State ();
    void init ();
    std::vector<Element> getListElement ();
    void Update ();
    void addElement (state::Element  element);
    state::State  clone ();
    void addState (state::State state);
    // Setters and Getters
  };

};

#endif