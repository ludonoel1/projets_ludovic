// Generated by dia2code
#ifndef AI__MINMAX__H
#define AI__MINMAX__H

#include <vector>
#include <state/State.h>

namespace engine {
  class Command;
};
namespace ai {
  class Node;
};
namespace state {
  class State;
};
namespace engine {
  class Engine;
};
namespace ai {
  class Ai;
}

#include "engine/Command.h"
#include "Node.h"
#include "state/State.h"
#include "Ai.h"

namespace ai {

  /// class MinMax - 
  class MinMax : public ai::Ai {
    // Attributes
  public:
    engine::Command list_command;
    std::vector<ai::Node> tree;
    state::State state_tempo;
    int Team;
    // Operations
  public:
    MinMax ();
    ~MinMax ();
    MinMax (int  team);
    void create_tree (state::State& state, engine::Engine& engine, int depth);
    void recursive (int depth, state::State& state, int depart, std::vector<engine::Command> record, int ordre, int id_parent, engine::Engine& engine);
    void score (ai::Node& node, const state::State& state, int team);
    int solve (const state::State& state, int team, std::vector<ai::Node> tree);
    engine::Command play (engine::Engine& engine, int character, state::State& state);
    // Setters and Getters
  };

};

#endif
