package com.example.template1.model;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Columns;

@EqualsAndHashCode(callSuper = true)
@Getter
@Setter
@Entity
@AllArgsConstructor
@NoArgsConstructor
public class Applicants extends BaseEntity{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "USER_ID")
    @JoinColumn(name = "USER_ID")
    private Users users;

    @ManyToOne
    @JoinColumn(name = "VOLUNTEER_ID")
    @JoinColumn(name = "VOLUNTEER_ID")
    private Volunteer volunteer;

    private char status;
}
