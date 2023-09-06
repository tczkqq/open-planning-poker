from typing import List

from utils import generate_room_code

class Participant():
    
    def __init__(self, id: int, name: str, operator: bool = False) -> None:
        self.id = id
        self.name = name
        self.operator = operator
        self._card = ''
        self._ready = False
        
    def set_card(self, card: str):
        self.card = card
        self.ready = bool(self.card)
        
    def get_card(self) -> str:
        return self.card
    
    def get_ready(self) -> bool:
        return self._ready
    
    def set_ready(self, ready) -> bool:
        self.ready = True  if ready and bool(self._card) else False
    
    def restart_card(self):
        self.card = ''
        self._ready = False

    def __str__(self) -> str:
         return f'[{self.id}]{self.name} ({self.operator})'
    
    def __repr__(self) -> str:
        return f'[{self.id}]{self.name} ({self.operator})'


class Room():
    
    def __init__(self, default_operator: bool = False) -> None:
        self.__id_count = 0
        self.room_code = generate_room_code()
        self._participants: List[Participant] = []
        self.default_operator = default_operator
    
    def _find_participant(self, id: int) -> Participant:
        for participant in self._participants:
            if participant.id == id:
                return participant
            
    def add_participant(self, name: str, operator: bool = False):
        self._participants.append(Participant(
            self.__id_count + 1,
            name,
            self.default_operator if self.default_operator else operator
        ))
        self.__id_count += 1
        
    def del_participant(self, id: int) -> None:
        self._participants.remove(self._find_participant(id))
                
    def get_participants(self) -> List[Participant]:
        return self._participants
    
    def restart_round(self) -> None:
        for participant in self._participants:
            participant.restart_card()
            
    def set_participant_ready(self, id: int, ready: bool) -> bool:
        return self._find_participant(id).set_ready(ready)
    
    def __str__(self) -> str:
        return self.room_code
            
