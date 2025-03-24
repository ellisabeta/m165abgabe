## m165abgabe

Types of NoSQL Database:  
- Document-Based Database
- Key-value stores / Time Series Database
- Graph
- Wide Column / Columnar Database

**ACID Properties in Database**:
- Atomicity, Consistency, Isolation, Durability.  
- It guarantees data validity, despite errors
- It focuses on consistency, thats why it's harder to scale
- Is for applications that require data consistency, reliability, and predictability

For Example banks use an ACID database to store customer transactions because data integrity is the top priority.

**Sharded data in databases**:


**Graph databases**:  
It originates from the graph theory. There are edges = relationships. Nodes = Vertices/Eckpunkte which are usually the entities. Nodes and Edges create connections in the database. It allows more complex relationship queries than a relational database.

LPG = Labeled Property Graph is a type of Graph Database. Nodes (entities), Relationships, Labes (works_at or is_a), Properties (key-values)  
