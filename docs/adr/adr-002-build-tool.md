# ADR-002: Build Tool

## Status

Accepted

## Context

The Java/Spring Boot backend needs a build tool. The main options are Maven and Gradle.

## Decision

**Gradle 8.5** with Groovy DSL.

## Consequences

**Positive:**
- Gradle 8.5 is already installed on the development machine; Maven is not
- Faster builds with incremental compilation and build cache
- `build.gradle` is more concise than `pom.xml`
- Gradle wrapper (`gradlew`) ensures build reproducibility
- Spring Initializr supports Gradle equally

**Negative:**
- Gradle DSL has a steeper learning curve than Maven's XML
- Some Spring Boot tutorials default to Maven examples

**Trade-off:** The pre-existing Gradle installation and build speed benefits outweigh Maven's wider tutorial availability.
